a = int(input())
b = int(input())
c = int(input())
d = int(input())
res = ""
for i in range(a, b+1):
    if i%d==c:
        res += format("%d " %i)
print(res)
