<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap | SmartSoft Solutions</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #334155;
            margin: 0;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            min-height: 100vh;
          }
          .container {
            max-width: 1000px;
            margin: 40px auto;
            padding: 0 20px;
          }
          .header {
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            padding: 40px;
            border-radius: 20px;
            color: white;
            margin-bottom: 30px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            position: relative;
            overflow: hidden;
          }
          .header::after {
            content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            background: radial-gradient(circle at top right, rgba(56, 189, 248, 0.1), transparent);
            pointer-events: none;
          }
          h1 {
            margin: 0 0 10px 0;
            font-size: 28px;
            font-weight: 800;
            letter-spacing: -0.025em;
          }
          p {
            margin: 0;
            opacity: 0.8;
            font-size: 16px;
          }
          .stats {
            display: flex;
            gap: 20px;
            margin-top: 20px;
          }
          .stat-item {
            background: rgba(255, 255, 255, 0.1);
            padding: 8px 16px;
            border-radius: 10px;
            font-size: 13px;
            font-weight: 600;
          }
          table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          th {
            background: #f8fafc;
            padding: 16px 24px;
            text-align: left;
            font-weight: 700;
            color: #64748b;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 0.05em;
            border-bottom: 1px solid #e2e8f0;
          }
          td {
            padding: 16px 24px;
            border-bottom: 1px solid #f1f5f9;
            vertical-align: middle;
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:hover td {
            background: #fdfdfd;
          }
          .url-link {
            color: #2563eb;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.2s;
          }
          .url-link:hover {
            color: #1e40af;
            text-decoration: underline;
          }
          .priority-badge {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 700;
            background: #dcfce7;
            color: #166534;
          }
          .priority-high {
            background: #dbeafe;
            color: #1e40af;
          }
          .last-mod {
            color: #94a3b8;
            font-family: monospace;
          }
          .footer {
            margin-top: 30px;
            text-align: center;
            color: #94a3b8;
            font-size: 13px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>XML Sitemap</h1>
            <p>Generated for SmartSoft Solutions Search Engine Indexing</p>
            <div class="stats">
              <div class="stat-item">
                Total URLs: <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
              </div>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Location</th>
                <th>Last Modified</th>
                <th>Change Freq</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <xsl:sort select="sitemap:priority" order="descending"/>
                <tr>
                  <td>
                    <a class="url-link">
                      <xsl:attribute name="href">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:attribute>
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td class="last-mod">
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td>
                    <span>
                      <xsl:attribute name="class">
                        <xsl:choose>
                          <xsl:when test="sitemap:priority &gt;= 0.8">priority-badge priority-high</xsl:when>
                          <xsl:otherwise>priority-badge</xsl:otherwise>
                        </xsl:choose>
                      </xsl:attribute>
                      <xsl:value-of select="sitemap:priority"/>
                    </span>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
          <div class="footer">
            &copy; 2026 SmartSoft Solutions. All Rights Reserved.
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
