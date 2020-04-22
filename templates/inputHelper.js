module.exports = (Handlebars) => {

  let templateControl = {};

  function getInput(field, label, fieldType, tipo) {
    let templateHtml = '';
    let componentConstructor = '';
    let importsStr = '';
    let componentInit = '';

    if (field.indexOf('paciente_id') !== -1) {
      templateHtml = `<app-app-ln-select [forceSelection]="false"
            [searchFunction]="lnBuscarPaciente" labelInputCodigo="Prontuário:" labelInputSelect="Paciente:"
            [lazyLoad]="true" placeholder=" " field="label" formControlName="${field}"
            findWindowModalTitle="Buscar paciente">
            <ng-template let-item lnTemplate="findWindow">
              <div style="max-width: 860px;">
                  <app-paciente-buscar [onSelect]="item.onSelect"></app-paciente-buscar>
              </div>
          </ng-template>
          </app-app-ln-select>`;

      importsStr = `import { PacienteBuscaService } from 'src/app/services/paciente/paciente-busca.service';`;

      componentConstructor = `private buscaPacienteService: PacienteBuscaService`;

      componentInit = `lnBuscarPaciente = this.buscaPacienteService.buscarPaciente`;
    } else if (field.indexOf('profissional_id') !== -1) {
      templateHtml = `<app-app-ln-select [searchFunction]="lnBuscarProf" labelInputCodigo="Conselho:" labelInputSelect="Profissional:"
            [lazyLoad]="true" placeholder=" " field="label" formControlName="${field}" findWindowModalTitle="Buscar profissional">

            <ng-template let-item lnTemplate="findWindow">
              <div style="max-width: 860px;">
                  <app-profissional-buscar [onSelect]="item.onSelect"></app-profissional-buscar>
              </div>
          </ng-template>
          </app-app-ln-select>`;

      importsStr = `import { ProfissionalBuscaService } from 'src/app/services/profissional/profissional-busca.service';`;

      componentConstructor = `private buscaProfService: ProfissionalBuscaService`;

      componentInit = `lnBuscarProf = this.buscaProfService.buscarProfissional`;
    } else if (field.indexOf('convenio_id') !== -1) {
      templateHtml = `<app-app-ln-select [searchFunction]="lnBuscarConvenio" labelInputCodigo="Código" labelInputSelect="Convênio:"
            [lazyLoad]="false" placeholder=" " field="label" formControlName="${field}">
          </app-app-ln-select>`;

      importsStr = `import { ConvenioBuscaService } from 'src/app/services/convenio/convenio-busca.service';`;

      componentConstructor = `private buscaConvenioService: ConvenioBuscaService`;

      componentInit = `lnBuscarConvenio = this.buscaConvenioService.buscarConvenio`;
    } else if (field.indexOf('cidade_id') !== -1) {
      templateHtml = `<app-app-ln-select [searchFunction]="lnBuscarCidade" [enableInputCod]="false"
            labelInputSelect="Cidade:" [lazyLoad]="true" placeholder=" " field="label"
            formControlName="${field}" autocompleteClassName="ui-sm-12 ui-md-12 ui-g-12 ui-g-nopad">
          </app-app-ln-select>`;

      importsStr = `import { CidadeBuscaService } from 'src/app/services/cidade/cidade-busca.service';`;

      componentConstructor = `private buscaCidadeService: CidadeBuscaService`;

      componentInit = `lnBuscarCidade = this.buscaCidadeService.buscarCidade`;
    } else if (field.indexOf('conta_id') !== -1) {
      templateHtml = `<app-app-ln-select [searchFunction]="lnBuscarConta" labelInputCodigo="Código:" labelInputSelect="Conta Entrada:"
            [lazyLoad]="true" placeholder=" " field="label" formControlName="${field}"
            findWindowModalTitle="Buscar Conta">
  
            <ng-template let-item lnTemplate="findWindow">
              <div style="max-width: 860px;">
                <app-conta-buscar [onSelect]="item.onSelect" *ngIf="item.active"></app-conta-buscar>
              </div>
            </ng-template>
          </app-app-ln-select>`;

      importsStr = `import { ContaBuscaService } from 'src/app/services/financeiro/conta-busca.service';`;

      componentConstructor = `private buscaContaService: ContaBuscaService`;

      componentInit = `lnBuscarConta = this.buscaContaService.buscarConta`;
    } else if (field.indexOf('fornecedor_id') !== -1) {
      templateHtml = `<app-app-ln-select [searchFunction]="lnBuscarFornecedor" labelInputCodigo="Código:"
            labelInputSelect="Fornecedor:" [lazyLoad]="true" placeholder=" " field="label" formControlName="${field}"
            findWindowModalTitle="Buscar Fornecedor">
            <ng-template let-item lnTemplate="findWindow">
              <div style="max-width: 860px;">
                <app-fornecedor-buscar [onSelect]="item.onSelect" *ngIf="item.active"></app-fornecedor-buscar>
              </div>
            </ng-template>
          </app-app-ln-select>`;

      importsStr = `import { FornecedorBuscaService } from 'src/app/services/financeiro/fornecedor-busca.service';`;

      componentConstructor = `private buscaFornecedorService: FornecedorBuscaService`;

      componentInit = `lnBuscarFornecedor = this.buscaFornecedorService.buscarFornecedor`;
    } else if (field.indexOf('ocorrencia_id') !== -1) {
      templateHtml = `<app-app-ln-select [searchFunction]="lnBuscarOcorrencia" labelInputCodigo="Ocor.:"
            labelInputSelect="Nome do Paciente:" [lazyLoad]="true" placeholder=" " field="label"
            formControlName="${field}">
          </app-app-ln-select>`;

      importsStr = `import { OcorrenciaBuscaService } from 'src/app/services/ocorrencia/ocorrencia-busca.service';`;

      componentConstructor = `private buscaOcorrenciaService: OcorrenciaBuscaService`;

      componentInit = `lnBuscarOcorrencia = this.buscaOcorrenciaService.buscarOcorrencia`;
    } else if (field.indexOf('tipo_ocorrencia_id') !== -1) {
      templateHtml = `<app-app-ln-select [searchFunction]="lnBuscarTipoOcorrencia" labelInputCodigo="Código" labelInputSelect="Tipo de Ocorrência*:" [lazyLoad]="false" placeholder=" " field="label" formControlName="${field}">
            </app-app-ln-select>`;

      importsStr = `import { TipoOcorrenciaBuscaService } from 'src/app/services/ocorrencia/tipo-ocorrencia-busca.service';`;

      componentConstructor = `private buscaTipoOcorrencia: TipoOcorrenciaBuscaService`;

      componentInit = `lnBuscarTipoOcorrencia = this.buscaTipoOcorrencia.buscarTipoOcorrencia`;
    } else if (field.indexOf('cbo_id') !== -1) {
      templateHtml = `<app-app-ln-select [searchFunction]="lnBuscarCbo" labelInputCodigo="Código" labelInputSelect="CBO:" [lazyLoad]="false" placeholder=" " field="label" formControlName="${field}">
            </app-app-ln-select>`;

      importsStr = `import { CboBuscaService } from 'src/app/services/cbo/cbo-busca.service';`;

      componentConstructor = `private buscaCbo: CboBuscaService`;

      componentInit = `lnBuscarCbo = this.buscaCbo.buscarCbo`;
    } else if (field === 'ativo') {
      templateHtml = `<p-checkbox [formControl]="formGroup.controls['ativo']" binary="true" label="Ativo"></p-checkbox>`;
    } else if (fieldType.indexOf('DATE') > -1 || fieldType.indexOf('DATEONLY') > -1) {
      templateHtml = `
            <label>${label}:</label>
            <app-app-ln-date formControlName="${field}"></app-app-ln-date>`;
    } else if (fieldType.indexOf('FLOAT') > -1 || fieldType.indexOf('DECIMAL') > -1 || fieldType.indexOf('DOUBLE') > -1) {
      templateHtml = `<label>${label}:</label>
                <input pInputText currencyMask formControlName="${field}" [options]="{ prefix: 'R$ ', thousands: '.', decimal: ',' }" />`;
    } else {
      templateHtml = `<label>${label}:</label>
            <input type="text" pInputText formControlName="${field}">`;
    }

    /*return tipo === 'html' ? templateHtml : tipo === 'comp-init' ? componentInit : tipo === 'comp-const' ? componentConstructor : importsStr;*/
    return tipo === 'html' ? templateHtml : tipo === 'comp-init' ? componentInit : tipo === 'comp-constructor' ? componentConstructor : importsStr;
  }

  Handlebars.registerHelper('getInput', function (field, label, fieldType, tipo, b) {
    const ipt = getInput(field, label, fieldType, tipo);
    return new Handlebars.SafeString(getInput(field, label, fieldType, tipo));
  });
  Handlebars.registerHelper('isTemplate', function (field, label, fieldType, tipo, b) {
    const ipt = getInput(field, label, fieldType, tipo);

    // controlar numero de impressoes de determinado item dentro do componente
    if (['comp-init', 'comp-constructor'].indexOf(tipo) !== -1) {
      if (!templateControl[b.data.root.getId()]) {
        templateControl[b.data.root.getId()] = [ipt];
      } else {
        const templatesFile = templateControl[b.data.root.getId()];
        if (templatesFile.findIndex(el => el === ipt) !== -1) {
          return false;
        } else {
          templatesFile.push(ipt);
        }
      }
    }

    return ipt !== '';
  });

  function getPipe(fieldType) {
    if (fieldType.indexOf('FLOAT') > -1 || fieldType.indexOf('DECIMAL') > -1 || fieldType.indexOf('DOUBLE') > -1) {
      return 'brl';
    } else if (fieldType.indexOf('DATE') > -1 || fieldType.indexOf('DATEONLY') > -1) {
      return `datex: 'DD/MM/YYYY'`;
    } else if (fieldType.indexOf('TIME') > -1) {
      return `datex: 'HH:mm'`;
    }
    return undefined;
  }

  Handlebars.registerHelper('withPipe', function (dataType) {
    return getPipe(dataType) !== undefined;
  });

  Handlebars.registerHelper('getId', function (b) {
    console.log(b);
    return b.data.root.getId();
  });

  Handlebars.registerHelper('addPipe', function (dataType) {
    return new Handlebars.SafeString(`{{rowData[col.field] | ${getPipe(dataType)}}}`);
  });
}