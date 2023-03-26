def make_chocolate(small, big, goal):
    big_bars = goal // 5 if big >= goal // 5 else big

    weight = goal - big_bars * 5

    if weight <= small:
        return weight
    else:
        return -1
