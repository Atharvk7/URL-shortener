import numpy as np
import pandas as pd
df = pd.read_csv("./dataset/goalscorers.csv")
player_counts = df['scorer'].value_counts()
#Here we are printing the every goal scorer with their goal counts
print(player_counts)


# getting the highest goal scorer
highest_goal_scorer = player_counts.index[0]


print(f" The highest goal scorer is {highest_goal_scorer} ")

# it is CR7 :)
