obj = {name: "harry" ,length : 1, a: {this : 'that'}}
jso = JSON.stringify(obj);

console.log(typeof jso);
console.log(jso);
parsad = JSON.parse('{"name":"harry","length":1,"a":{"this":"that"}}');

console.log(parsad);

