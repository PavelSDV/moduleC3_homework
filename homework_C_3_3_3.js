function withoutProto(){
    const obj = Object.create(null);
    return obj;
}

console.log(withoutProto());