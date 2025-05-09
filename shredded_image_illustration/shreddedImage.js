class ShreddedImage {
    constructor (img, width, height, shredWidth, oddEven = 0) {
        this.shreds = [];
        for (let x = 0; x < width; x += shredWidth) {
            if ((x / shredWidth) % 2 == oddEven) {
                const shred = document.createElement("canvas");
                shred.width = shredWidth;
                shred.height = height;
                const ctx = shred.getContext('2d')
                ctx.drawImage(img, -x, 0, width, height)
                this.shreds.push(shred)
            }
        }
    }

    draw(ctx, left, top, spread = 1) {
        for (let i = 0; i < this.shreds.length; i++) {
            const shred = this.shreds[i];
            const x = left + i * shred.width + i * spread * shred.width
            const y = top 
            ctx.drawImage(shred, x, y)
        }
    }
}