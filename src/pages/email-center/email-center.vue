<template>
  <div class="email-center">
    <email-header @composeEmail="composeEmail"></email-header>
    <section class="email-content">
      <email-list :emails="filteredEmails" @displayEmail="displayEmail" @filter="emailFilter = $event">
      </email-list>
      <email-details v-if="shouldshowDetails" :displayedEmail="displayedEmail" @deleteEmail="deleteEmail" >
      </email-details>
      <email-compose v-else @emailSent="emailSent" @composeEmail="composeEmail">
      </email-compose>
    </section>
    <email-status :barData="[unreadEmailsCounter, emailsDB.length]">
    </email-status>
  </div>
</template>
<script>
  import emailHeader from '../../components/emails/email-header/email-header.vue';
  import emailList from '../../components/emails/email-list/email-list.vue';
  import emailDetails from '../../components/emails/email-details/email-details.vue';
  import emailCompose from '../../components/emails/email-compose/email-compose.vue';
  import emailStatus from '../../components/emails/email-status/email-status.vue';
  import moment from 'moment';

  export default {
    data() {
      return {
        emailsDB: [
          // { id: 1, subject: 'hello', date: moment().format(), isRead: false, isDisplayed: false, body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
          // { id: 2, subject: 'vue', date: moment().format(), isRead: false, isDisplayed: false, body: 'Quas reprehenderit autem ea voluptatum eligendi quis aut.' },
          // { id: 3, subject: 'js', date: moment().format(), isRead: false, isDisplayed: false, body: 'Harum perspiciatis suscipit veniam cupiditate deleniti odit laboriosam.' },
          // { id: 4, subject: 'hello', date: moment().format(), isRead: false, isDisplayed: false, body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
          // { id: 5, subject: 'vue', date: moment().format(), isRead: false, isDisplayed: false, body: 'Quas reprehenderit autem ea voluptatum eligendi quis aut.' },
          // { id: 6, subject: 'js', date: moment().format(), isRead: false, isDisplayed: false, body: 'Harum perspiciatis suscipit veniam cupiditate deleniti odit laboriosam.' },
          // { id: 7, subject: 'hello', date: moment().format(), isRead: false, isDisplayed: false, body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
          // { id: 8, subject: 'vue', date: moment().format(), isRead: false, isDisplayed: false, body: 'Quas reprehenderit autem ea voluptatum eligendi quis aut.' },
          // { id: 9, subject: 'js', date: moment().format(), isRead: false, isDisplayed: false, body: 'Harum perspiciatis suscipit veniam cupiditate deleniti odit laboriosam.' }
        ],
        currFilteredEmails: [],
        displayedEmail: {},
        shouldshowDetails: true,
        unreadEmailsCounter: 0,
        emailFilter: {txt:'', readStatus: 'all'}
      }
    },
    methods: {
      composeEmail(ev) {
        this.shouldshowDetails = ev;
       },
      displayEmail(emailId) {
        this.shouldshowDetails = true;
        this.emailsDB.forEach(email => {
          if (email.id === emailId) {
            email.isDisplayed = true;
            if(!email.isRead) {
              this.unreadEmailsCounter--;
            }
            this.displayedEmail = email;
            this.displayedEmail.isRead = true;
          } else {
            email.isDisplayed = false;
          }
        });
      },
      reloadEmails() {
          this.$http.get('emails')
              .then(res => res.json())
              .then(emails => {
                  this.emailsDB = emails;
                  this.unreadEmailsCounter = this.emailsDB.length;
              });
      },
      emailSent(email) {
        this.shouldshowDetails = true;
        this.emailsDB.push(email);
      },
      deleteEmail(emailId) {
        this.displayedEmail.subject ='';
        this.displayedEmail.body ='';
        this.$http.delete(`item/${emailId}`);
        this.emailsDB = this.emailsDB.filter(email => email.id !== emailId);
      },
    },
    computed: {
      displayedEmails() {
        if(this.emailFilter.readStatus === 'all') {
          return this.currFilteredEmails = this.emailsDB;
        } else if(this.emailFilter.readStatus === 'read') {
          return this.currFilteredEmails = this.emailsDB.filter(email => {
              return email.isRead;
          });
        } else if (this.emailFilter.readStatus === 'unread') {
            return this.currFilteredEmails = this.emailsDB.filter(email => {
              return !email.isRead;
          });
        }
      },
      filteredEmails() {
        this.displayedEmails;
        let emailTxt = this.emailFilter.txt.toLowerCase();
        let emailReadStatus = this.emailFilter.readStatus;
        return this.currFilteredEmails.filter(email => {
            return (email.subject.toLowerCase().includes(emailTxt) ||
            email.body.toLowerCase().includes(emailTxt))
        });
      }
    },
    components: {
      emailHeader,
      emailList,
      emailDetails,
      emailStatus,
      emailCompose
    },
    created(){
      this.reloadEmails();
    }
  }
</script>

<style scoped>
  .email-center {
    width: 100%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
    position: relative;
    height: 100%;
    
  }

  .email-content {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    border: 2px solid #3a4144;
    height: 100%;
    position: relative;
  }

  @media screen and (max-width: 590px){
    .email-content{
      flex-direction: column;
    }
  }

  ul {
    list-style: none;
  }

  email-status {
    display:flex;
    justify-content: space-around;
  }
</style>