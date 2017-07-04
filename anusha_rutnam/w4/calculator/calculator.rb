# problems: i have no idea what end refers to what and I can get the individual operators to loop

restartCalc = 'go'
until restartCalc == 'stop'


  puts "What sort of arithmetic operation would you like to perform? Type either Add,     Subtract, Multiply or Divide."
  arithmetic_operator = gets.chomp.downcase


  puts "what two numbers would you like to #{arithmetic_operator} ?"
  number_1 = gets.to_i
  number_2 = gets.to_i

  # restartAdd = 'go'
  # until restartAdd == 'stop'

    if arithmetic_operator == 'add'

      puts "#{number_1} + #{number_2} = #{number_1+number_2}"

      puts 'would you like to use a different operator? (y/n)'
      quit = gets.chomp.downcase

      if quit == 'y'
        restartCalc = 'go'
      else
      restartCalc = 'stop'
    end
    # not sure how to make add restart if quit == n



    else
      if arithmetic_operator == 'subtract'
      puts "#{number_1} - #{number_2} = #{number_1-number_2}"

      else
        if arithmetic_operator == 'multiply'
        puts "#{number_1} x #{number_2} = #{number_1*number_2}"

        else
          if arithmetic_operator == 'divide'
          puts "#{number_1} ÷ #{number_2} = #{number_1/number_2}"


            end
          end
        end
    end #operator
end #until


# Calculator
#
# Explanation
#
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:
#
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1
#
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
#
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
# Bonus
#
# Mortgage Calculator
#
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# BMI Calculator
#
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# Trip Calculator
#
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour
