def centered_average(nums):
    sum = 0
    for i in nums:
        sum += i
    return (sum - min(nums) - max(nums)) / (len(nums) - 2)

