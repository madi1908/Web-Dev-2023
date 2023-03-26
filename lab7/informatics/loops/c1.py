a = int(input())
i = 0
ans = 1
while ans*2 <= a:
    ans*=2
    i += 1
print(i, ans)