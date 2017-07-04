# Create a controller called PagesController, which inherits from the  ApplicationController
class PagesController < ApplicationController

    # Define a method (or "action") called "home" in this controller.
    def home
    end


    def games

        colours = %w{
    Pink
    LightPink
    HotPink
    DeepPink
    PaleVioletRed
    MediumVioletRed}

    # sample is a method that will pick a rando element from array
        @colours = colours.sample

      end




end
