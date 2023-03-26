if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    for  i in range(n):
        x = int(input())
    maxi = int()
    second_maxi = int()
    for i in range(n):
        if maxi < x:
            second_maxi = maxi
            maxi=x
        elif x > second_maxi:
            second_maxi = x
    print(second_maxi)          