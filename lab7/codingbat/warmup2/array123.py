def array123(n):
    for i in range(len(n) - 2):
        if n[i] == 1 and n[i + 1] == 2 and n[i + 2] == 3:
            return True
    return False
