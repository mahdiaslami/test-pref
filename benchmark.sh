#!/bin/bash

SCRIPT=$1
RUNS=100
times=()

echo "Result of ${SCRIPT}"

for ((i=1; i<=RUNS; i++)); do
  result=$(node $SCRIPT | grep 'time' | awk '{print $2}')
  ms=${result%ms}
  times+=($ms)
done

sum=0
min=${times[0]}
max=${times[0]}

for t in "${times[@]}"; do
  sum=$(echo "$sum + $t" | bc)
  (( $(echo "$t < $min" | bc -l) )) && min=$t
  (( $(echo "$t > $max" | bc -l) )) && max=$t
done

avg=$(echo "scale=2; $sum / $RUNS" | bc)

echo "Average: $avg ms"
echo "Best: $min ms"
echo "Worst: $max ms"
