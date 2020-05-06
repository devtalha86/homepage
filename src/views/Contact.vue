<template>
    <div class="contact">
        <section id="contact" style="margin-top:50px;">
            <div class="contact-pageheader">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="contact-caption">
                                <h1 class="contact-title">Want to discuss project?</h1>
                                <p class="contact-text">Here is a few approaches to get in touch with us. It would be
                                    ideal if you send an email, fill the contact form <strong>We are looking forward to
                                        hear your about your project.</strong>
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-offset-1 col-md-5 col-sm-12 col-xs-12">
                            <div class="contact-form">
                                <h3 class="contact-info-title">Write to us</h3>
                                <div class="row">
                                    <form>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="form-group">
                                                <label class="control-label sr-only " for="Name"></label>
                                                <input name="name" id="name" type="text" placeholder="Name"
                                                    class="form-control" required>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="form-group">
                                                <label class="control-label sr-only " for="email"></label>
                                                <input name="email" id="email" type="text" placeholder="Email"
                                                    class="form-control" required>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="form-group">
                                                <label class="control-label sr-only " for="Phone"></label>
                                                <input name="phone" id="phone" type="text" placeholder="Phone"
                                                    class="form-control" required>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="form-group">
                                                <label class="control-label required sr-only" for="select"></label>
                                                <select name="subject" class="form-control">
                                                    <option value="">What Are You Getting In Touch?</option>
                                                    <option value="">Relationship</option>
                                                    <option value="">Life Coaching</option>
                                                    <option value="">Leadership</option>
                                                    <option value="">Time Management</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb20">
                                            <div class="form-group">
                                                <label class="control-label sr-only" for="textarea"></label>
                                                <textarea name="message" class="form-control pdt20" id="textarea" rows="4" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                                            <button type="submit" value="Send" class="btn btn-primary btn-lg ">Send
                                                message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Address />
        </section>
    </div>
</template>

<script>
import Address from './Address';

    export default {
        name: 'Contact',
        components: {
            Address
        },
        data() {
            return {

            }
        }
    }
</script>

<style>

</style>