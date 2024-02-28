// Funções
// void m(){} se fosse Java
function hello(){
    console.log('oi')
}
hello()
function hello(nome){
    console.log('oi, ' + nome)
}
hello('Rodrigo')

// Declaração
// v1 = []
// console.log(v1.length) // 0
// v1[0] = 3.4
// console.log(v1.length) // 1
// v1[10] = 2
// console.log(v1.length) // 1
// v1[2] = 'abc'
// console.log(v1.length) // 10
// v1[99] = true
// console.log(v1.length) // 100
// console.log(v1)
// for(let i = 0; i < v1.length; i++){
//     console.log(v1[i])
// }

// int[] = new int[0];
// var v1 = new ArrayList<int>();

// Você não quer usar o operador de comparação ==
// console.log([] == [])
// console.log([] == false)
// console.log(null == undefined)
// console.log(null == null)
// console.log(1 == [1, 1])
// console.log(21 == [2, 1])
// console.log(1 == [2, 1])
// console.log(1 == [1, 2])
// console.log(1 == [2])
// console.log(1 == [1])
// console.log(1 == true)
// console.log(1 === '1')
// console.log(1 === 1)
// console.log(1 == '1')
// console.log(1 == 1)

// const n1 = 2
// const n2 = '3'
// // Coerção implícita
// const n3 = n1 + n2
// console.log(n3)
// // Coerção explícita
// const n4 = n1 + Number(n2)
// console.log(n4)

// String a = "abc"; // Java, estaticamente tipado, feito pelo compilador
// let a = "abc" // Javascript, dinamicamente tipado, feito pelo interpretador, em tempo de execução
// a.falar();

// var idade = 18
// console.log(`Oi, ${nome}`)
// if (idade >= 18){
//     let nome = 'João' // içamento (hoist)
//     console.log(`Parabéns, ${nome}. Você pode dirigir!`)
// }
// console.log(`Até mais, ${nome}`)

// var linguagem = "Javascript"
// console.log(`Aprendendo ${linguagem}`)
// var linguagem = "Java"
// console.log(`Aprendendo ${linguagem}`)

// let nome = "Rodrigo"
// console.log(nome)
// nome = "Pedro"
// console.log(nome)

// let a = 2
// console.log(typeof(a))
// a = "abc"
// console.log(typeof(a))
// a = true
// console.log(typeof(a))
// let b
// console.log(typeof(b))

// // declaração constantes
// // Java: String nome = "Rodrigo"
// const nome = "José"
// console.log(nome)
// // nome = "Pedro"
// const endereco = 'Rua B, 21'
// console.log(endereco)
// const sobrenome = `Bossini`
// console.log(sobrenome)
// // Me chamo Rodrigo. Meu sobrenome é Bossini.
// console.log('Me chamo ' + nome + '. Meu sobrenome é ' + sobrenome + '.')
// console.log(`Me chamo ${nome}. Meu sobrenome é ${sobrenome}.`) //interpolação
// const idade = 18
// const passeiDeAno = true