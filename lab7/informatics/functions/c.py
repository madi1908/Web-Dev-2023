def xor(x, y):
    if (x and not y) | (y and not x):
        return 1
    return 0


a, b = map(int, input().split())
print(xor(a, b))
