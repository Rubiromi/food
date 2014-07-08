class UserMailer < ActionMailer::Base
  default from: "no-reply@myapp.co.uk.de.yo.ninja"

  def welcome(user_email)
    @user_email = user_email
    mail(to: @user_email, subject: 'welcome to the club')
  end

end
