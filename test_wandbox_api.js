async function testWandbox() {
    try {
        const payload = {
            compiler: "cpython-3.10.0",
            code: "import sys\nprint('hello ' + sys.argv[1])",
            options: "",
            "compiler-option-raw": "",
            "runtime-option-raw": "world"
        };
        const response = await fetch("https://wandbox.org/api/compile.json", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        console.log(data);
    } catch(e) {
        console.error(e);
    }
}
testWandbox();
