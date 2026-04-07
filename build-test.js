import { build } from 'vite'

async function run() {
  try {
    await build()
  } catch (e) {
    console.error("VITE BUILD ERROR:")
    console.error(e)
  }
}
run()
