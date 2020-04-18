## 盛最多水的容器

给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。



**说明**：你不能倾斜容器，且 n 的值至少为 2。

![question_11](./images/question_11.jpg)

图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

 

**示例：**

```javascript
输入：[1,8,6,2,5,4,8,3,7]
输出：49
```



```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

};
```



## 解题思路

#### 一、依次循环（不推荐）

通过两个循环，依次计算并对比，时间复杂度N<sup>2</sup>。

```javascript
var maxArea = function (height) {
  let max = 0;
  for (let i = 1; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
    }
  }
  return max;
};
```



#### 二、双指针

​		矩形面积由高度和两线之间的间距相乘求得，这里我们采用首尾指针的方式，进行计算。由于不管是左指针往右移动一格，还是右指针往左移动一格，两线的间距都是在不断缩小，想要使矩形面积竟可能大，我们就要在每次移动的时候保留高的那条线，放弃短的那条。即左边比右边短，那么我们的左指针往右移动一格；反之，有指针往左移动一格。

​		又可知，矩形必须是封闭的，所以每次计算的时候，应该拿短的那条线乘以间距。



**代码一**

```javascript
var maxArea = function (height) {
  let max = 0;
  let left = 0,
    right = height.length - 1;

  while (left < right) {
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};
```



**代码二**

性能上比代码一优越点

```javascript
var maxArea = function (height) {
  let max = 0;
  let shorter = 0;
  for (let left = 0, right = height.length - 1; left < right; ) {
    shorter = height[left] < height[right] ? height[left++] : height[right--];
    
    // 这里+1是因为指针（左或者右）提前移动，所以当前循环体内需要+1
    max = Math.max(max, shorter * (right - left + 1));
  }
  return max;
};
```





