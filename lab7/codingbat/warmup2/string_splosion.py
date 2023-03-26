def string_splosion(str):
    ans = ""
    # On each iteration, add the substring of the chars 0..i
    for i in range(len(str)):
        ans = ans + str[:i+1]
    return ans