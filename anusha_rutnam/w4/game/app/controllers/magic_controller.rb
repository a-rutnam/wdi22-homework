# Create a controller called PagesController, which inherits from the  ApplicationController
class MagicController < ApplicationController


  def magic

    answers = [
      "It is certain",
      "It is decidedly so",      "Without a doubt",      "Yes definitely",      "You may rely on it",      "As I see it - yes",      "Most likely",      "Outlook good",      "Yes",      "Signs point to yes",      "Reply hazy try again",      "Ask again later",      "Better not tell you now",      "Cannot predict now",      "Concentrate and ask again",      "Don't count on it",      "My reply is no",      "My sources say no",      "Outlook not so good",      "Very doubtful"      ]
    # sample is a method that will pick a rando element from array
      @answers = answers.sample
  end


end
