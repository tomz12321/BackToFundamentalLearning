/**
 * Beginning with Dynamic programming, Knapsack problem:
 * 
 * Source: https://openhome.cc/Gossip/AlgorithmGossip/KnapsackProblem.htm#Java
 * Practiced by Jyh-woei Yang (Tom) on 2018/10/21
 */

import java.util.*;

class Fruit {
    String name;
    int weight;
    int price;
    Fruit(String name, int weight, int price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    public String toString() {
        return String.format("(%s, %d, %d)", name, weight, price);
    }
}

public class Knapsack {
    public static List<Fruit> knapsack(List<Fruit> fruits, int limit) {
        int[] values = new int[limit + 1];
        int[] items = new int[limit + 1];
        for(int i = 0; i < fruits.size(); i++) {
            for(int w = fruits.get(i).weight; w <= limit; w++) {
                int p = w - fruits.get(i).weight;
                int newValue = values[p] + fruits.get(i).price; 
                if(newValue > values[w]) {
                    values[w] = newValue; 
                    items[w] = i; 
                }
            }
        }
        List<Fruit> solution = new ArrayList<>();
        // JDK8 Lambda
        int min = Collections.min(fruits
                   , (f1, f2) -> f1.weight - f2.weight).weight;
        for(int i = limit; i >= min; i -= fruits.get(items[i]).weight) {
            solution.add(fruits.get(items[i]));
        }
        return solution;
    }

    public static void main(String[] args) {
        System.out.println(knapsack(Arrays.asList(
                      new Fruit("李子", 4, 4500), new Fruit("蘋果", 5, 5700),
                      new Fruit("橘子", 2, 2250), new Fruit("草莓", 1, 1100),
                      new Fruit("甜瓜", 6, 6700)), 8));
    }
}