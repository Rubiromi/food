class NotificationMailer < ActionMailer::Base
  default from: "no-reply@myapp.com"
          # subject: '',
          # to: 'me@me.com',
          # cc: '',
          # bcc: '',
          # # these are just a default

  # def contact_form(user_email, in_reagrds_to, content) instead of <-  passing some hash.
  def contact_form(params)
    @params = params
    mail(from: @params[:user_email], to: 'me@myapp.com', subject: 'You have a new contact request')
  end
end
