<template>
    <div id='app'>
        <label class="label">Subject</label>
        <p class="control">
            <input class="input" type="text" placeholder="Text input">
        </p>
        
        <label class="label">Body</label>
        <p class="control has-icon has-icon-right">
            <textarea class="input is-success" type="text" placeholder="Text input" value="bulma">
            <i class="fa fa-check"></i>
            <span class="help is-success">This username is available</span>
        </p>
        <label class="label">Email</label>
        <p class="control has-icon has-icon-right">
        <input class="input is-danger" type="text" placeholder="Email input" value="hello@">
        <i class="fa fa-warning"></i>
        <span class="help is-danger">This email is invalid</span>
        </p>
        <label class="label">Subject</label>
        <p class="control">
        <span class="select">
            <select>
            <option>Select dropdown</option>
            <option>With options</option>
            </select>
        </span>
        </p>
        <label class="label">Message</label>
        <p class="control">
        <textarea class="textarea" placeholder="Textarea"></textarea>
        </p>
        <p class="control">
        <label class="checkbox">
            <input type="checkbox">
            Remember me
        </label>
        </p>
        <p class="control">
        <label class="radio">
            <input type="radio" name="question">
            Yes
        </label>
        <label class="radio">
            <input type="radio" name="question">
            No
        </label>
    </p>
<p class="control">
  <button class="button is-primary">Submit</button>
  <button class="button is-link">Cancel</button>
</p>
    </div>
</template>

<script>
    export default {
        data() { 
            return {
            
            }
        }
    }
</script>

<style scoped>

</style>