
f1 = open("India 1.txt", "r") #add your file here
data=[]
for x in f1:
    a=f1.readline()
    lis=a.split(':')
    data.append(lis)

f2 = open("India 2.txt", "r") #add your file here
for x in f2:
    a=f2.readline()
    lis=a.split(':')
    data.append(lis)
length=len(data)
number=[]
for i in range(0,length):
    number.append(data[i][0])

with open ("number.txt",'a') as ff:
 for i in number:
  ff.write("%s \n"%i)