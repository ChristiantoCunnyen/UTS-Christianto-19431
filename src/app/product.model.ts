export class Product{
    id: string;
    jenis: string;
    foto: string[];
    merek: string;
    model: string;
    harga: number;
    stok: number;
    base_clock?: number;
    boost_clock?: number;
    jumlah_core?: number;
    jumlah_thread?: number;
    speed?: number;
    ukuran?: number;
    chipset?: string;
    merek_processor?: string;

    public constructor(init?: Partial<Product>) {
        Object.assign(this, init);
    }
}