class RpsController < ApplicationController



  def rps


    if (params[:throw] == rock)
      @result = "yay"
    else
      @result =  "nay"


    end







end
