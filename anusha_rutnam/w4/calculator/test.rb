# puts "What is your first name?"
#
# first_name = gets.chomp
# # gets is a method as is puts
#
# # first_name = first_name.chomp
#
# puts "Your first name is #{ first_name }, good job"
#
#
# puts "What is your last name?"
#
#
# last_name = gets.chomp
# puts "Your surname is #{last_name}"
#
# puts "Your fullname is #{first_name} #{last_name}"


###1. Drinking age?
#
# Ask the user for their age.
# Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
# If age is less than 18, print an appropriate message.
# If the age is equal to or over 18, print a different message.
#
# puts "How old are you?"
# age = gets.chomp.to_i
# # to i means no need for chomp gets.to_i
#
# puts "You are #{age} years old. Good job"
#
# p "You're too young to drink" if age < 18
#
# p "Have a beer" if age > 18
#
# # luke's:
# # if age < 18
# #   p "You're too young to drink"
# # else
# #  p "Have a beer" if age > 18
# # end
#
# # ###2. Air Conditioning
# #
# # Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
# # If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# # If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
# # If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

puts "What's the current temperature?"
temperature = gets.to_i

puts "Does your AC work? (y/n):"
ac = gets.chomp.downcase #to lowecase

puts "What temperature do you wish it was?"
ideal_temperature = gets.chomp.to_i

if ac == 'y'
  #check desired temp
  if temperature > ideal_temperature
    puts "turn on ac"
  end

else

  if temperature > ideal_temperature
    puts "fix ac whenevs"
  else
    puts "fix ac NOW"
  end

end


#
# # above is Luke's better version
#
# if ac == 'yes' and temperature > ideal_temperature
#   puts "Turn on the A/C Please" end
#
# else ac == 'no' and temperature > ideal_temperature
#    puts "Fix the A/C now! It's hot!" end
#
# else ac == 'no' and temperature < ideal_temperature
#    puts "Fix the A/C whenever you have the chance... It's cool..." end

   # ###3. Sydney Suburbs
   #
   # Create a program that asks what suburbs you live in.
   # Depending on the answer, print an appropriate response of your choosing

  #  puts "What suburb do you live in?"
  #  suburb = gets.chomp.downcase
  #    puts "You live in the suburb of #{ suburb }, good job"
   #
  #    lule version:

#      puts "What suburb do you live in?"
#      suburb = gets.chomp.downcase
#        puts "You live in the suburb of #{ suburb }, good job"
#
# output = case suburb
#   # case statements returns which ever statement turns out to be true
# when "manly"
#    "Nice boat shoes."
# when "newport"
#    "bla newport"
# when "newtown"
#    "hip"
# else
#    "oh good"
# end

# puts output
#


    #  puts "What suburb do you live in?"
    #  suburb = gets.chomp
     #
    #  if suburb == "Bondi"
    #    puts "bla bondi"
     #
    #  elsif suburb == "newport"
    #    puts "bla newport"
     #
    #  else
    #    puts "You live in the suburb of #{ suburb }, good job"
    #
    # Title: Guess The Number
    #
    # Activity:
    #
    # You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
    # Specification:
    #
    # The user should be asked to guess a number
    # If the user's guess is correct, the user should see a congratulatory message
    # If the user's guess is not correct, the user should be asked to guess the number again.
    # Extensions:
    #
    # Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
    # Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

#
# MAX_VALUE = 10
# # uppercase indicates constant, var that you shouldn't change value of
#
# random_number = rand 0..MAX_VALUE
#
# puts "Guess a number between 1 and #{MAX_VALUE}"
# guessed_number = gets.to_i
#
# guess_count = 0
#
# until guessed_number == random_number
#
#   if guessed_number > random_number
#     puts 'wrong, guess lower'
#   else
#     puts 'wrong, guess higher'
#   end
#   guess_count += 1
#
#   guessed_number = gets.to_i
#
# end #until
#
# puts "congrats you guessed in #{guess_count}"
#
#
# # above is luke's
#
#     puts "Guess a number between 1 and 10"
#     guessed_number = gets.to_i
#     p "your guessed number is #{guessed_number}"
#
#     random_number = Random.rand(1..10)
#     #
#     until guessed_number == random_number
#       puts 'guess again!'
#       guessed_number = gets.to_i
#         random_number = random_number
#
#     if guessed_number == random_number
#       p 'yay'
#
#
#     end

    # homework
    # there's a way to call a function whose name is called in a string
