<h3 style="margin:0; padding:0">Objective:</h3>
The "composable-dot-box" object allows you to wrap your data in composable and immutable 
getters and setters. 
<p>Composability is a system design principle that deals with the 
inter-relationships of components. It allows the users to select and assemble
data in nested structures. Immutability will make sure the setter will only return
copies of your source data without changing them.</p>



<h3 style="margin:0; padding:0">Methods:</h3>
<ul>
    <li>of</li>
    <li>map</li>
    <li>mapTo</li>
    <li>reduce</li>
    <li>fork</li>
    <li>print</li>
</ul>



<h3 style="margin:0; padding:0">Examples:</h3>
Example 1: dealing with string
```
    const currentCharacterData = '64_32_41'
    const nextCharacter = DotBox
      .of(currentCharacterData)
      .map(str => new Number(str.split('_')[0]))
      .map(number => number +1)
      .map(nextNum => String.fromCharCode(nextNum))
      .print();
```

example 2: dealing with object
```    
    const myData = {
      firstName: 'Matt',
      middleName: 'CP',
      lastName: 'Chen',
      height: '6\'',
      weight: '165',
      location: 'New York'
    };
    
    const myHealthStatus = DotBox
      .of(myData)
      .map(data => ({
        name: data.firstName +' '+data.middleName +' '+data.lastName,
        weight: data.weight
      }))
      .map(data => {
        const name = data.name;
        const isFatorNot = Number(data.weight)>160? 'fat' : 'skinny';
        return name + ', you are too ' + isFatorNot;
      })
      .print();
    
    // Matt CP Chen, you are too fat
 ```