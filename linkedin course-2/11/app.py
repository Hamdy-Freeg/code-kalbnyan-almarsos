first_name = 'malala'
last_name = 'yousafzai'
note = 'award: Nobel Peace Prize'
firstNameCap = first_name.capitalize()
lastNameCap = last_name.capitalize()
awardLocation = note.find('award: ')
awardText = note[7:]
print(firstNameCap)
print(lastNameCap)
print(awardLocation)
print(awardText)
