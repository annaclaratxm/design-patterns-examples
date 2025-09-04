// Classes concretas
class PdfReport {
  generate() {
    return "Relatório em PDF gerado!";
  }
}

class PdfInvoice {
  generate() {
    return "Fatura em PDF gerada!";
  }
}

class DocxReport {
  generate() {
    return "Relatório em DOCX gerado!";
  }
}

class DocxInvoice {
  generate() {
    return "Fatura em DOCX gerada!";
  }
}

// Cliente
function main(format) {
  let report, invoice;

  if (format === "pdf") {
    report = new PdfReport();
    invoice = new PdfInvoice();
  } else if (format === "docx") {
    report = new DocxReport();
    invoice = new DocxInvoice();
  } else {
    throw new Error("Formato não suportado");
  }

  console.log(report.generate());
  console.log(invoice.generate());
}

main("pdf");
main("docx");

// Abstract Factory
class DocumentFactory {
  createReport() {
    throw new Error("Método abstrato deve ser implementado");
  }
  createInvoice() {
    throw new Error("Método abstrato deve ser implementado");
  }
}

// Concrete Factories
class PdfFactory extends DocumentFactory {
  createReport() {
    return new PdfReport();
  }
  createInvoice() {
    return new PdfInvoice();
  }
}

class DocxFactory extends DocumentFactory {
  createReport() {
    return new DocxReport();
  }
  createInvoice() {
    return new DocxInvoice();
  }
}

// Cliente
const factories = {
  pdf: new PdfFactory(),
  docx: new DocxFactory(),
};

class DocumentApp {
  constructor(factory) {
    this.report = factory.createReport();
    this.invoice = factory.createInvoice();
  }

  generateDocuments() {
    console.log(this.report.generate());
    console.log(this.invoice.generate());
  }
}

// Uso
function main() {
  const types = ["pdf", "docx"];

  types.forEach((type) => {
    console.log(`\n>> Fábrica selecionada: ${type} <<`);
    const factory = factories[type];
    if (!factory) throw new Error("Tipo de fábrica desconhecido");

    const app = new DocumentApp(factory);
    app.generateDocuments();
  });
}

main();
