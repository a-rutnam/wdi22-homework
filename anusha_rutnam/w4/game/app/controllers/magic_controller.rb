# Create a controller called PagesController, which inherits from the  ApplicationController
class MagicController < ApplicationController


  def magic

    answers = [
      "It is certain",
      "It is decidedly so",
    # sample is a method that will pick a rando element from array
      @answers = answers.sample
  end


end