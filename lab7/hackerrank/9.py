if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    array = list(set(arr))
    array.sort()
    print(array[-2])     