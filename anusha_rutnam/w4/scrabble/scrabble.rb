# def values {
#     1 => %w{A E I O U L N R S T},
#     2 => %w{D G},
#     3 => %w{B C M P },
#     4 => %w{F H V W Y},
#     5 => %w{K},
#     8 => %w{J X},
#     10 => %w{Q Z}
#
# }
# end

# long way:
def values
{
  'a' => 1, 'e' => 1, 'i' => 1, 'o' => 1,
  'u' => 1, 'l' => 1, 'n' => 1, 'r' => 1,
  's' => 1, 't' => 1, 'd' => 2, 'g' => 2,
  'b' => 3, 'c' => 3, 'm' => 3, 'p' => 3,
  'f' => 4, 'h' => 4, 'v' => 4, 'w' => 4,
  'y' => 4, 'k' => 5, 'j' => 8, 'x' => 8,
  'q' => 10, 'z' => 10
  }
end

def special_score
  random = Random.rand(10)
  if random < 3 # double letter score
    val *=
  elsif random == 9
    val *== 3
  end
  val
end

def get_score ( word )
  #start a total with 0
  sum = 0
  word.chars.each do |letter|
  #for each letter look up the score
  sum += special_score( values[letter])
  end
  sum
  # without this implicit return, the letters spit out and no score. I don't get it
end

p what word would you like to check

input = gets.chomp

puts get_score(input)



# above is edges

# all_squares = {
#   :"1" => %w[A E I O U L N R S T],
#   2 => %w[D G],
#   3 => %w[B C M P ],
#   4 => %w[F H V W Y],
#   5 => %w[K],
#   8 => %w[J X],
#   10 => %w[Q Z]
# }
#
# # p all_squares.key("Z")
#
# # def word_score(word)
#
#   all_squares.each do |value|
#     puts "Value: #{value}"
# end
#
#   puts "Play your word"
#
#   played_word = gets.chomp.chars
#   # p played_word
#   # ["c", "a", "b", "b", "a", "g", "e"]
#
#
#
#   played_word.each
#
#
# end

# word_score(cabbage)

# for each value in the played_word array, see if it exists in one of the all_squares arrays and if it does, return its key value




# Write a program that, given a word, computes the scrabble score for that word.
#
# scrabble("cabbage")
# # => 14
# Your program should be in a file named scrabble.rb. You should be able to compute the score for any word entered by the user.
#
# Letter Values
#
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10


# Extensions
#
# You can play a :double or a :triple letter.
# You can play a :double or a :triple word.
