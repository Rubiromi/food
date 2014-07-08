class AdminMailer < ActionMailer::Base
  default from: "no-reply@myapp.co.jp"

  def report
    @number_of_users = rand(1000)
    mail(to: 'admin@myapp.com', subject: 'Number of users')
  end

end
