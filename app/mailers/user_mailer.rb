class UserMailer < ActionMailer::Base
  default from: "no-reply@arcane-meadow-5019.herokuapp.com"

  def welcome(user_email)
    @user_email = user_email
    mail(to: @user_email, subject: 'welcome to the club')
  end

end
