<template>
  <div class="app">
    <app-header></app-header>
    <section class="email-content">
      <email-list :emails="emails" @displayEmail="displayEmail" @filter="emailFilter = $event">
      </email-list>
      <email-details :displayedEmail="displayedEmail" @deleteEmail="deleteEmail">
      </email-details>
    </section>
    <email-status :barData="[unreadEmailsCounter, emailsDB.length]">
    </email-status>
  </div>
</template>
<script>
  import appHeader from './components/app-header.vue'
  import emailList from './components/emails/email-list.vue'
  import emailDetails from './components/emails/email-details.vue'
  import emailStatus from './components/emails/email-status.vue'

  export default {
    data() {
      return {
        emailsDB: [
          { id: 1, subject: 'hello', from: 'puki', date: moment().format(), isRead: false, isDisplayed: false, body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
          { id: 2, subject: 'vue', from: 'muki', date: moment().format(), isRead: false, isDisplayed: false, body: 'Quas reprehenderit autem ea voluptatum eligendi quis aut.' },
          { id: 3, subject: 'js', from: 'shuki', date: moment().format(), isRead: false, isDisplayed: false, body: 'Harum perspiciatis suscipit veniam cupiditate deleniti odit laboriosam.' }
        ],
        displayedEmail: {},
        unreadEmailsCounter: 3,
        emailFilter: {readStatus: 'all'},
      }
    },
    methods: {
      displayEmail(emailId) {
        console.log('method displayEmail');
        this.emails.forEach(email => {
          if (email.id === emailId) {
            email.isDisplayed = true;
            this.displayedEmail = email;
            this.displayedEmail.isRead = true;
            this.unreadEmailsCounter--;
          } else {
            console.log('the email clicked wasnt found');
          }
        });

        // if (!this.displayedEmail.isRead) {
        //   this.displayedEmail.isRead = true;
        //   this.unreadEmailsCounter--;
        // }
      },
      deleteEmail(emailId) {
        this.emailsDB = this.emailsDB.filter(email => email.id !== emailId);
      },
    },
    computed: {
      emails() {
        if (!this.emailFilter.txt && this.emailFilter.readStatus === 'all') {
          return this.emailsDB
        }
        else {
          return this.emailsDB.filter(email => {
            return (email.subject.toLowerCase().includes(this.emailFilter.txt.toLowerCase()) ||
             email.body.toLowerCase().includes(this.emailFilter.txt.toLowerCase()) ||
           email.from.toLowerCase().includes(this.emailFilter.txt.toLowerCase())) &&
              (this.emailFilter.readStatus === 'all' || email.isRead === this.emailFilter.readStatus)
          });

        };
      }
    },
    components: {
      appHeader,
      emailList,
      emailDetails,
      emailStatus
    }
  }
</script>

<style>
.app {
  width: 85%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
}
.email-content {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  min-height: 300px;
}

ul {
  list-style: none;
}

email-status {
  display:flex;
  justify-content: space-around;
}
</style>