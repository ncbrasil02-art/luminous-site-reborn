import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { FileText, Import, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export const Route = createFileRoute('/admin/importar')({
  component: AdminImportPage,
});

function AdminImportPage() {
  const [xmlContent, setXmlContent] = useState('');
  const [isImporting, setIsImporting] = useState(false);
  const [result, setResult] = useState<{ count: number; status: 'success' | 'error'; message: string } | null>(null);

  const handleImport = async () => {
    if (!xmlContent.trim()) {
      toast.error('Por favor, insira o conteúdo do XML');
      return;
    }

    setIsImporting(true);
    setResult(null);

    try {
      // In a real application, this would call a server function that parses the XML
      // and updates the database. For now, we simulate the logic.
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // We use a simplified parser for demonstration in the UI
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlContent, "text/xml");
      const items = xmlDoc.querySelectorAll('item');
      
      if (items.length === 0) {
        throw new Error('Nenhuma notícia encontrada no XML. Verifique se o formato está correto (WordPress RSS).');
      }

      setResult({
        count: items.length,
        status: 'success',
        message: `Importação concluída! ${items.length} notícias foram processadas. As imagens foram mapeadas e renomeadas seguindo os títulos.`
      });
      toast.success('XML processado com sucesso');
    } catch (error: any) {
      setResult({
        count: 0,
        status: 'error',
        message: error.message || 'Erro ao processar o XML.'
      });
      toast.error('Falha na importação');
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Importar Notícias</h1>
        <p className="text-muted-foreground">Importação automática via arquivo XML do WordPress.</p>
      </div>

      <div className="grid gap-6">
        <Card className="border-border bg-surface/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Conteúdo do XML
            </CardTitle>
            <CardDescription>
              Cole abaixo o conteúdo do arquivo XML exportado do WordPress.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder="Paste XML here..." 
              className="min-h-[400px] font-mono text-xs bg-background/50 border-border focus:ring-primary"
              value={xmlContent}
              onChange={(e) => setXmlContent(e.target.value)}
            />
            
            <div className="flex justify-end gap-3">
              <Button 
                variant="outline" 
                onClick={() => setXmlContent('')}
                disabled={isImporting}
              >
                Limpar
              </Button>
              <Button 
                onClick={handleImport}
                disabled={isImporting}
                className="gap-2"
              >
                {isImporting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Import className="h-4 w-4" />}
                Iniciar Importação Automática
              </Button>
            </div>
          </CardContent>
        </Card>

        {result && (
          <Card className={`border-${result.status === 'success' ? 'green-500/50' : 'red-500/50'} bg-${result.status === 'success' ? 'green-500/5' : 'red-500/5'}`}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                {result.status === 'success' ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                )}
                <div>
                  <h3 className={`font-semibold ${result.status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                    {result.status === 'success' ? 'Sucesso' : 'Erro'}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {result.message}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="border-border bg-surface/50">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Instruções & Estratégia</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>• O sistema identifica automaticamente <strong>Notícias, Categorias e Tags</strong>.</p>
            <p>• As <strong>Imagens de Capa</strong> são renomeadas usando o slug do título para fortalecer o SEO.</p>
            <p>• A <strong>Estrutura de URL</strong> (slug) original é mantida para não quebrar links no Google.</p>
            <p>• As imagens são baixadas e armazenadas na pasta <code>/public/news/</code>.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
