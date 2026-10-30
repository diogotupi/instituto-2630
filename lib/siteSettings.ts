import settings from '@/content/site-settings.json';

export const siteSettings = settings.pages;
export const cultureHours =
  siteSettings.cultura.days * siteSettings.cultura.hoursPerDay;
export const cultureDuration = `${siteSettings.cultura.days} dias · ${siteSettings.cultura.hoursPerDay} horas por dia · ${cultureHours} horas totais`;

export const editablePages = [
  { id: 'home', name: 'Home', path: '/' },
  { id: 'penaporta', name: 'Pé na Porta', path: '/penaporta/' },
  { id: 'ceol', name: 'CEO-L', path: '/ceol/' },
  { id: 'cultura', name: 'Cultura de Elite', path: '/cultura-de-elite/' },
  { id: 'freitas', name: 'Freitas', path: '/freitas/' },
  { id: 'wallace', name: 'Wallace', path: '/wallace/' },
] as const;
export type PageId = (typeof editablePages)[number]['id'];
export type SettingsDocument = typeof settings;
export const fieldLabels: Record<string, string> = {
  format: 'Formato',
  duration: 'Duração',
  days: 'Quantidade de dias',
  hoursPerDay: 'Horas por dia',
  date: 'Data da próxima turma',
  schedule: 'Horários',
  location: 'Local ou plataforma',
  investment: 'Preço ou investimento',
  payment: 'Formas e condições de pagamento',
  seats: 'Quantidade de vagas',
  recording: 'Política de gravação',
  checkoutUrl: 'Destino dos botões de inscrição / proposta',
  contactUrl: 'Destino do botão de contato',
  instagramUrl: 'Link do Instagram',
  instagramLabel: 'Instagram exibido',
  email: 'E-mail de contato',
  phone: 'Telefone com código do país (ex.: +5521981269626)',
  phoneLabel: 'Telefone exibido',
};

export function validateSettings(value: unknown): string[] {
  const errors: string[] = [];
  if (
    !value ||
    typeof value !== 'object' ||
    !('pages' in value) ||
    !('version' in value) ||
    value.version !== 1
  )
    return ['Arquivo de configurações inválido.'];
  const pages = (value as SettingsDocument).pages;
  for (const page of editablePages) {
    if (!pages?.[page.id] || typeof pages[page.id] !== 'object') {
      errors.push(`Configuração ausente: ${page.name}.`);
      continue;
    }
    for (const [key, original] of Object.entries(settings.pages[page.id])) {
      const current = (pages[page.id] as Record<string, unknown>)[key];
      const label = `${page.name}: ${fieldLabels[key] ?? key}`;
      if (typeof original === 'number') {
        if (
          !Number.isInteger(current) ||
          Number(current) < 1 ||
          Number(current) > 365
        )
          errors.push(`${label} deve ser um número inteiro entre 1 e 365.`);
      } else if (
        typeof current !== 'string' ||
        !current.trim() ||
        current.length > 1500
      ) {
        errors.push(
          `${label} deve ser preenchido (máximo de 1.500 caracteres).`,
        );
      } else if (key.endsWith('Url')) {
        try {
          const parsed = new URL(current);
          if (
            parsed.protocol !== 'https:' ||
            parsed.username ||
            parsed.password
          )
            throw new Error();
        } catch {
          errors.push(`${label} precisa ser um endereço HTTPS válido.`);
        }
      } else if (key === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(current))
        errors.push(`${label} é inválido.`);
      else if (key === 'phone' && !/^\+[1-9]\d{7,14}$/.test(current))
        errors.push(
          `${label} deve conter apenas + e os números com código do país.`,
        );
    }
  }
  return errors;
}

const configurationErrors = validateSettings(settings);
if (configurationErrors.length) throw new Error(configurationErrors.join('\n'));
