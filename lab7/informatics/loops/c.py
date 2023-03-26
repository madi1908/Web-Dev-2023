import math
a = int(input())
b = int(input())
res = ""
for i in range(a, b+1):
    x = int(math.sqrt(i))
    if x**2==i:
        res+= format("%d " %i)
print(res)