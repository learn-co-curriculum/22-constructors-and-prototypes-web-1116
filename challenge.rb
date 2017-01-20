# Create a class to represent a Person
# A Person should have a first name and a last name.
# They should have a method called 'full_name' that returns first and last

class Person
  attr_accessor :first_name, :last_name

  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name
  end

  def full_name
    "#{self.first_name} #{self.last_name}"
  end
end

kanye = Person.new("Kanye", "West")
puts kanye
jay_z = Person.new('Sean', 'Carter')


def new(*args)
  obj = self.allocate
  obj.initialize(args)
end
