def not_string(st):
    if len(st) >= 3 and st[0:3] == "not":
        return str
    return "not " + st
