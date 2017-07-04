class CalculatorController < ApplicationController

  def do_calc

    # raise 'hell'

    @x = params["x"].to_f
    @y = params["y"].to_f
    @op = params["operator"]

    if @op == "divide"
      @result = @x / @y
    else
# don't need brackets they just shows that op and y are arguments to the method
      @result = @x.send( @op, @y)
    end


  end

end
