# JavaScript Performance Benchmark Tool

A simple benchmarking utility for measuring and comparing JavaScript code performance.

## Overview

This repository contains tools to benchmark JavaScript code execution times. The benchmarking script runs your JavaScript code multiple times and provides statistics on execution performance including average, best, and worst run times.

## Usage

### Running a benchmark

To benchmark a JavaScript file, use the `benchmark.sh` script:

```bash
./benchmark.sh path/to/your/script.js
```

The script will run your JavaScript code 100 times and output performance statistics.

### Example

```bash
./benchmark.sh test-perf.js
```

This will execute `test-perf.js` 100 times and display results like:

```
Result of test-perf.js
Average: 42.35 ms
Best: 38.12 ms
Worst: 58.76 ms
```

## How it works

The benchmarking tool:
1. Runs your JavaScript file 100 times (configurable in the script)
2. Captures the execution time from each run (your script should output time in the format "time XXms")
3. Calculates and displays the average, minimum, and maximum execution times

## Requirements

- Node.js installed on your system
- Your JavaScript files should output timing information with the word "time" followed by a number and "ms"
- `bc` command-line calculator (pre-installed on most Unix-like systems)

## Customization

You can modify the number of benchmark runs by changing the `RUNS` variable in `benchmark.sh`.
