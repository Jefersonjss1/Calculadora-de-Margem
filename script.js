function calcular() {
    const custoProduto = document.getElementById('custo').value;
    const markUp = document.getElementById('mark-up').value / 100;

    const markUpId = (markUp).toFixed(2) * 100 + "%";
    document.getElementById('mark-up-id').innerHTML = markUpId;

    const custoMark = (custoProduto * (1+markUp)).toFixed(2);
    document.getElementById('custo-mark').innerHTML = (`R$ ${custoMark}`);

    const precoVenda = (custoMark / (1-0.18-0.0925)).toFixed(2);
    document.getElementById('preco-venda').innerHTML = (`R$ ${precoVenda}`);

    const icms = (precoVenda * 0.18).toFixed(2);
    document.getElementById('icms').innerHTML = (`R$ ${icms}`);

    const pisCof = (precoVenda * 0.0925).toFixed(2);
    document.getElementById('pis-cof').innerHTML = (`R$ ${pisCof}`);

    const ipi = (precoVenda * (1+0.15)).toFixed(2);
    document.getElementById('ipi').innerHTML = (`R$ ${ipi}`);

    const margemLucro = (custoMark - custoProduto).toFixed(2);
    document.getElementById('margem-lucro').innerHTML = (`R$ ${margemLucro}`);

    const margemPorc = (margemLucro / precoVenda).toFixed(4) * 100 + "%";
    document.getElementById('margem-porc').innerHTML = (`R$ ${margemPorc}`);

    document.getElementById('infos').classList.remove('hidden');
}
