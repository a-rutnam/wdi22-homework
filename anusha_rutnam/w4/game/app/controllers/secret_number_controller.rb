class SecretNumberController < ApplicationController
  def secret_number

  @secret_number = Random.rand(1..10)
  guessed_number = params[:guess].to_f

    if (guessed_number == @secret_number)
     @success_or_not = "You got it!"

      else
      @success_or_not = "Better luck next time!"
    end


  end




end
