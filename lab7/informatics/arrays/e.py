n = int(input())
bln = False
a = list(map(int, input().split()))
for i in range(1, n):
    if a[i] * a[i - 1] > 0:
        bln = True
        break
print("YES" if bln else "NO")