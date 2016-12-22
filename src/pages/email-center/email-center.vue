<template>
  <div class="email-center">
    <email-header @composeEmail="composeEmail"></email-header>
    <section class="email-content">
      <email-list :emails="filteredEmails" @displayEmail="displayEmail" @filter="emailFilter = $event">
      </email-list>
      <email-details v-if="shouldshow" :displayedEmail="displayedEmail" @deleteEmail="deleteEmail" >
      </email-details>
      <email-compose v-else @emailSent="emailSent">
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
          { id: 1, subject: 'hello', date: moment().format(), isRead: false, isDisplayed: false, body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
          { id: 2, subject: 'vue', date: moment().format(), isRead: false, isDisplayed: false, body: 'Quas reprehenderit autem ea voluptatum eligendi quis aut.' },
          { id: 3, subject: 'js', date: moment().format(), isRead: false, isDisplayed: false, body: 'Harum perspiciatis suscipit veniam cupiditate deleniti odit laboriosam.' },
          { id: 4, subject: 'hello', date: moment().format(), isRead: false, isDisplayed: false, body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
          { id: 5, subject: 'vue', date: moment().format(), isRead: false, isDisplayed: false, body: 'Quas reprehenderit autem ea voluptatum eligendi quis aut.' },
          { id: 6, subject: 'js', date: moment().format(), isRead: false, isDisplayed: false, body: 'Harum perspiciatis suscipit veniam cupiditate deleniti odit laboriosam.' },
          { id: 7, subject: 'hello', date: moment().format(), isRead: false, isDisplayed: false, body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
          { id: 8, subject: 'vue', date: moment().format(), isRead: false, isDisplayed: false, body: 'Quas reprehenderit autem ea voluptatum eligendi quis aut.' },
          { id: 9, subject: 'js', date: moment().format(), isRead: false, isDisplayed: false, body: 'Harum perspiciatis suscipit veniam cupiditate deleniti odit laboriosam.' }
        ],
        displayedEmail: {},
        shouldshow: true,
        unreadEmailsCounter: 3,
        emailFilter: {readStatus: 'all'},
      }
    },
    methods: {
      composeEmail(ev) {
        this.shouldshow = ev;
       },
      displayEmail(emailId) {
        console.log('method displayEmail');
        this.emailsDB.forEach(email => {
          if (email.id === emailId) {
            email.isDisplayed = true;
            this.displayedEmail = email;
            this.displayedEmail.isRead = true;
            this.unreadEmailsCounter--;
          } else {
            email.isDisplayed = false;
          }
        
        });
      },
      emailSent(email) {
        this.emailsDB.push(email);
        this.shouldshow = true;
      },
      deleteEmail(emailId) {
        this.emailsDB = this.emailsDB.filter(email => email.id !== emailId);
        this.displayedEmail.subject ='';
        this.displayedEmail.body ='';
      },
    },
    computed: {
      filteredEmails() {
        if (!this.emailFilter.txt && this.emailFilter.readStatus === 'all') {
          return this.emailsDB
        }
        else {
          return this.emailsDB.filter(email => {
            // If the email subject include the text in the filter
            return (email.subject.toLowerCase().includes(this.emailFilter.txt.toLowerCase()) ||
                    // OR If the email body include the text in the filter
                    email.body.toLowerCase().includes(this.emailFilter.txt.toLowerCase()) ||
                    // OR If the email status include the text in the filter
            (this.emailFilter.readStatus === 'all' || email.isRead === this.emailFilter.readStatus))
          });

        }
      }
    },
    components: {
      emailHeader,
      emailList,
      emailDetails,
      emailStatus,
      emailCompose
    }
  }
</script>

<style>
.email-center {
  width: 98%;
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