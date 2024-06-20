import { getColorIterator } from "./utils/colors/color.js"
import sample from "./examples/widget00.js"
function widget(key, draw) {
let nextColor = getColorIterator(key)
// Desenho do corpo do robô
draw.rect(300, 400).move(300, 200).fill(nextColor())
draw.rect(200, 200).move(350, 100).fill(nextColor())
draw.circle(20).move(390, 150).fill('black')
draw.circle(20).move(460, 150).fill('black')
draw.rect(40, 200).move(250, 250).fill(nextColor()) // B.e
draw.rect(40, 200).move(560, 250).fill(nextColor()) // B.d
draw.rect(40, 200).move(320, 600).fill(nextColor()) // P.e
draw.rect(40, 200).move(510, 600).fill(nextColor()) // P.d
draw.circle(30).move(400, 300).fill('gray')
draw.circle(30).move(500, 300).fill('gray')

//DOIS AVATAR PROFESSOR.

// pokémon blastoise
// fffffff000fffq
//draw.circle().size(200).move(10,800).fill(nextColor())
//draw.circle().size(200).move(800,800).fill(nextColor())
//draw.circle().size(200).move(800,-0).fill(nextColor())
//draw.circle().size(200).move(10,-0).fill(nextColor())
//4 de cima e bolinha
//draw.circle().size(350).move(560,580).fill(nextColor())
//draw.circle().size(350).move(90,600).fill(nextColor())
//draw.circle().size(350).move(89,160).fill(nextColor())
//draw.circle().size(350).move(650,200).fill(nextColor())
//draw.circle().size(350).move(370,-5).fill(nextColor())
//draw.circle().size(555).move(240,250).fill(nextColor())

// Descomente a linha abaixo para ver o exemplo 0
// sample(key, draw)
}
export default widget