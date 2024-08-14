import * as chromedriver from 'chromedriver'
import { Builder, By, Key, WebDriver, until } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome'
import * as assert from 'assert';
import * as fs from 'fs'

const service = new chrome.ServiceBuilder(chromedriver.path).build()

const laUrl = "http://localhost:4200"

describe('la selenio prueba', () => {
    let driver: WebDriver
    before (async() => {
        driver = await new Builder().forBrowser("chrome").setChromeOptions(new chrome.Options().headless()).build()
    })

    after(async() => {
        await driver.quit()
    })

    describe("poner datos", ()=>{
        it("login", async() => {
            let urlPosta = laUrl+"/login"
            await driver.get(urlPosta)
            await driver.findElement(By.id("name")).sendKeys("!admin")
            await driver.findElement(By.id("password")).sendKeys("!admin")
            await driver.findElement(By.id("btn")).click()
            driver.sleep(3000)
            /* let titulo = await driver.getTitle()
            assert.strictEqual(titulo, "Login") */
        })
        it("carga", async()=>{
            let urlPosta = laUrl+"/carga"
            await driver.get(urlPosta)
            await driver.findElement(By.id("palabra")).sendKeys("palabra(YaSeSoyMuyGraciosoJaJaJa)")
            await driver.findElement(By.id("numero")).sendKeys("123456789")
            await driver.findElement(By.id("mandar")).click()
            /*const titulo = await driver.getTitle();
            assert.strictEqual(titulo, 'carga de datos');*/
            driver.sleep(3000)
        })
    })
    describe("Navegacion", () =>{
        it("menu", async() => {
            let urlPosta = laUrl+"/Datos"
            await driver.get(urlPosta)
            let titulo = await driver.getTitle()
            assert.strictEqual(titulo, "Datos")
        })
        it("carga datos", async() =>{
            let urlPosta = laUrl+"/Datos"
            await driver.get(urlPosta)
            await driver.findElement(By.id("cargardatos")).click()
            let titulo = await driver.getTitle()
            assert.strictEqual(titulo, "carga de datos")
        })
        it("ver datos", async() =>{
            let urlPosta = laUrl+"/carga"
            await driver.get(urlPosta)
            await driver.findElement(By.id("cargardatos")).click()
            let titulo = await driver.getTitle()
            assert.strictEqual(titulo, "carga de datos")
        })
        it("cerrar sesion", async() => {
            let urlPosta = laUrl+"/Datos"
            await driver.get(urlPosta)
            await driver.findElement(By.id("logout")).click()
            let titulo = await driver.getTitle()
            console.log(await driver.getTitle())
            assert.strictEqual(titulo, "Login")
        })
    })
    describe('Screenshot', () => {
        it('Menu (no es el home)', async () => {
            await driver.get(laUrl);
            const imagen = await driver.takeScreenshot();
            fs.writeFileSync('meniu.png', imagen, 'base64')
        });
        it('Datos', async () => {
            let urlPosta = laUrl+"/Datos"
            await driver.get(urlPosta)
            const imagen = await driver.takeScreenshot();
            fs.writeFileSync('datos.png', imagen, 'base64')
        });

        it('Login', async () => {
            let urlPosta = laUrl+"/login"
            await driver.get(urlPosta)
            const imagen = await driver.takeScreenshot();
            fs.writeFileSync('login.png', imagen, 'base64')
        });

        it('Register', async () => {
            let urlPosta = laUrl+"/registro"
            await driver.get(urlPosta)
            const imagen = await driver.takeScreenshot();
            fs.writeFileSync('register.png', imagen, 'base64')
        });

        it('Carga de Datos', async () => {
            let urlPosta = laUrl+"/carga"
            await driver.get(urlPosta)
            const imagen = await driver.takeScreenshot();
            fs.writeFileSync('cargaDatos.png', imagen, 'base64')
        });

    });
})